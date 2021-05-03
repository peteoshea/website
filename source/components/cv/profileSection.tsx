import Profile from '../../types/profile';
import CvSection from './section';

type Props = {
  profile: Profile;
};

export const CvProfileSection = ({ profile }: Props): JSX.Element => {
  const emailUrl = 'mailto:' + profile.email;
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
            <a href={emailUrl} className="flex items-center text-gray-500 hover:text-gray-900">
              <img src="/favicon-96x96.png" alt="Email icon" className="h-12 p-2" />
              <div>{profile.email}</div>
            </a>
          </div>
        ) : null}
        {profile.githubName ? (
          <div className="mx-2">
            <a href={githubUrl} className="flex items-center text-gray-500 hover:text-gray-900">
              <img src="/GitHub-Mark.svg" alt="GitHub logo" className="h-12 p-2" />
              <div>{profile.githubName}</div>
            </a>
          </div>
        ) : null}
        {profile.twitter ? (
          <div className="mx-2">
            <a href={twitterUrl} className="flex items-center text-gray-500 hover:text-gray-900">
              <img src="/TwitterLogo.svg" alt="Twitter logo" className="h-12 p-3" />
              <div>@{profile.twitter}</div>
            </a>
          </div>
        ) : null}
      </div>
    </CvSection>
  );
};

export default CvProfileSection;
