import MirrorRedditUser from './MirrorRedditUser';

interface ReduxMirrorRedditUser {
  state: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
  data: MirrorRedditUser;
}

export default ReduxMirrorRedditUser;
