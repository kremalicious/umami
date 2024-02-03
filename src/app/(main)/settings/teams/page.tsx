import TeamsDataTable from './TeamsDataTable';
import TeamsHeader from './TeamsHeader';
import { Metadata } from 'next';
import appMeta from '../../../../../app.json';

export default function () {
  if (process.env.cloudMode) {
    return null;
  }

  return (
    <>
      <TeamsHeader />
      <TeamsDataTable />
    </>
  );
}

export const metadata: Metadata = {
  title: `Team Settings | ${appMeta.name}`,
};
