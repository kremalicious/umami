import { Metadata } from 'next';
import Websites from './Websites';
import appMeta from '../../../../../app.json';

export default function () {
  return <Websites />;
}

export const metadata: Metadata = {
  title: `Website Settings | ${appMeta.name}`,
};
