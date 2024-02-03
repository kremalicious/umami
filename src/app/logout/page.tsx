import Logout from './Logout';
import { Metadata } from 'next';
import appMeta from '../../../app.json';

export default function () {
  return <Logout />;
}

export const metadata: Metadata = {
  title: `Logout | ${appMeta.name}`,
};
