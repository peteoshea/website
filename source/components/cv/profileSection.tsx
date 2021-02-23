import Profile from '../../types/profile';
import CvSection from './section';

type Props = {
  profile: Profile;
};

export const CvProfileSection = ({ profile }: Props): JSX.Element => {
  const twitterUrl = 'https://twitter.com/' + profile.twitter;
  let githubUrl = profile.githubUrl;
  if (profile.githubName && !profile.githubUrl) {
    githubUrl = 'https://github.com/' + profile.githubName;
  }

  return (
    <CvSection title="Profile">
      <div className="mt-2">{profile.summary}</div>
      <div className="flex flex-col justify-evenly items-center mt-2 sm:flex-row">
        {profile.email ? (
          <div className="mx-2">
            <a href={profile.email} className="text-gray-500 hover:text-gray-900">
              {profile.email}
            </a>
          </div>
        ) : null}
        {profile.githubName ? (
          <div className="mx-2">
            <a href={githubUrl} className="text-gray-500 hover:text-gray-900">
              {profile.githubName}
            </a>
          </div>
        ) : null}
        {profile.twitter ? (
          <div className="mx-2">
            <a href={twitterUrl} className="text-gray-500 hover:text-gray-900">
              @{profile.twitter}
            </a>
          </div>
        ) : null}
        {profile.githubName ? (
          <div className="mx-2">
            <a href={profile.githubUrl} className="text-gray-500 hover:text-gray-900">
              {profile.githubName}
            </a>
          </div>
        ) : null}
      </div>
    </CvSection>
  );
};

export default CvProfileSection;
