import WebsitesPage from './WebsitesPage';
import { Metadata } from 'next';

export default function ({ params: { teamId } }) {
  return <WebsitesPage teamId={teamId} />;
}

export const metadata: Metadata = {
  title: 'Websites',
};
