import ReportTemplates from './ReportTemplates';
import { Metadata } from 'next';
import appMeta from '../../../../../app.json';

export default function ReportsCreatePage() {
  return <ReportTemplates />;
}

export const metadata: Metadata = {
  title: `Create Report | ${appMeta.name}`,
};
