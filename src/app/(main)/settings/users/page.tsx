import UsersDataTable from './UsersDataTable';
import { Metadata } from 'next';
import appMeta from '../../../../../app.json';

export default function () {
  return <UsersDataTable />;
}
export const metadata: Metadata = {
  title: `Users | ${appMeta.name}`,
};
