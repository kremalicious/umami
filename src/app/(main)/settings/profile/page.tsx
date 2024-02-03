import ProfileHeader from './ProfileHeader';
import ProfileSettings from './ProfileSettings';
import { Metadata } from 'next';
import appMeta from '../../../../../app.json';

export default function () {
  return (
    <>
      <ProfileHeader />
      <ProfileSettings />
    </>
  );
}

export const metadata: Metadata = {
  title: `Profile Settings | ${appMeta.name}`,
};
