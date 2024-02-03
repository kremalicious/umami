import ReportsHeader from './ReportsHeader';
import ReportsDataTable from './ReportsDataTable';
import appMeta from '../../../../app.json';

export default function () {
  return (
    <>
      <ReportsHeader />
      <ReportsDataTable />
    </>
  );
}
export const metadata = {
  title: `Reports | ${appMeta.name}`,
};
