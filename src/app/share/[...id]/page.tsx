import Share from './Share';
import { Metadata } from 'next';
import appMeta from '../../../../app.json';

export default function ({ params: { id } }) {
  return <Share shareId={id[0]} />;
}

export const metadata: Metadata = {
  title: appMeta.name,
};
