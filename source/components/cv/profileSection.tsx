import Profile from 'types/profile';
import CvSection from 'components/cv/section';

type Props = {
  profile: Profile;
};

export const CvProfileSection = ({ profile }: Props): JSX.Element => {
  const emailUrl = 'mailto:' + profile.email;
  const title = profile.title ?? 'Profile';
  const twitterUrl = 'https://twitter.com/' + profile.twitter;
  let githubUrl = profile.githubUrl;
  if (profile.githubName && !profile.githubUrl) {
    githubUrl = 'https://github.com/' + profile.githubName;
  }

  return (
    <CvSection title={title}>
      <div className="mt-2">{profile.summary}</div>
      <div className="flex flex-col justify-evenly items-center mt-2 sm:flex-row">
        {profile.githubName ? (
          <a
            href={githubUrl}
            className="flex items-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-2"
          >
            <img src="/GitHub-Mark.svg" alt="GitHub logo" className="h-12 p-2" />
            <div>{profile.githubName}</div>
          </a>
        ) : null}
        {profile.email ? (
          <a
            href={emailUrl}
            className="flex items-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-2"
          >
            <img src="/favicon-96x96.png" alt="Email icon" className="h-12 p-2" />
            <div>{profile.email}</div>
          </a>
        ) : null}
        {profile.linkedInName && profile.linkedInUrl ? (
          <a
            href={profile.linkedInUrl}
            className="flex items-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-2"
          >
            <img src="/In-Blue-Logo.png" alt="LinkedIn logo" className="h-12 p-3" />
            <div>{profile.linkedInName}</div>
          </a>
        ) : null}
        {profile.twitter ? (
          <a
            href={twitterUrl}
            className="flex items-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-2"
          >
            <img src="/TwitterLogo.svg" alt="Twitter logo" className="h-12 p-3" />
            <div>@{profile.twitter}</div>
          </a>
        ) : null}
      </div>
    </CvSection>
  );
};

export default CvProfileSection;
