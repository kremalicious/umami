import ReportDetails from './ReportDetails';
import { Metadata } from 'next';
import appMeta from '../../../../../app.json';

export default function ReportDetailsPage({ params: { id } }) {
  if (!id) {
    return null;
  }

  return <ReportDetails reportId={id} />;
}

export const metadata: Metadata = {
  title: `Reports | ${appMeta.name}`,
};
