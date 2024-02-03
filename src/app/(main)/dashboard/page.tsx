import Dashboard from 'app/(main)/dashboard/Dashboard';
import { Metadata } from 'next';
import appMeta from '../../../../app.json';

export default function () {
  return <Dashboard />;
}

export const metadata: Metadata = {
  title: `Dashboard | ${appMeta.name}`,
};
