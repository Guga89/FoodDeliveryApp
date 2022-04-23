import SettingsLayout from '../../../components/admin/settingsLayout';
import AdminLayout from '../../../components/admin/adminLayout';

const Settings = () => {
  return (
    <AdminLayout>
      <SettingsLayout pageTitle="Settings page">
        <div className="contain">
          <p>Here will be some settings content</p>
        </div>
      </SettingsLayout>
    </AdminLayout>
  );
};

export default Settings;
