import LoginForm from './LoginForm';
import { Metadata } from 'next';
import styles from './page.module.css';
import appMeta from '../../../app.json';

async function getDisabled() {
  return !!process.env.LOGIN_DISABLED;
}

export default async function LoginPage() {
  const disabled = await getDisabled();

  if (disabled) {
    return null;
  }

  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
}

export const metadata: Metadata = {
  title: `Login | ${appMeta.name}`,
};
