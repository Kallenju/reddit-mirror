export default function getLinkProps(
  view:
    | 'personal-header'
    | 'post-header'
    | 'comment-header'
    | 'longread-header'
    | 'shortread-header',
  userName?: string,
  token?: string
): { href: string; ariaLabelledby: string } {
  if (view === 'personal-header') {
    if (token) {
      return {
        href: `#my-account`,
        ariaLabelledby: `Go to profile of ${userName}`,
      };
    } else {
      return {
        href: `https://www.reddit.com/api/v1/authorize?client_id=${__CLIENT_ID}&response_type=code&state=RANDOMSTRING&redirect_uri=${__REDIRECT_URI}:${__REDIRECT_PORT}/auth&duration=permanent&scope=read%20submit%20identity`,
        ariaLabelledby: 'Go to login page',
      };
    }
  }

  if (
    view === 'post-header' ||
    view === 'longread-header' ||
    view === 'shortread-header' ||
    view === 'comment-header'
  ) {
    if (userName) {
      return {
        href: `#user-url`,
        ariaLabelledby: `Go to profile of ${userName}`,
      };
    } else {
      return {
        href: ``,
        ariaLabelledby: 'Anonymous post. No user profile available',
      };
    }
  }

  return {
    href: ``,
    ariaLabelledby: '',
  };
}
