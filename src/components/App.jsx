import user from 'data/user';
import statisticalData from 'data/statistical-data';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <Statistics stats={statisticalData} />
    </div>
  );
}
