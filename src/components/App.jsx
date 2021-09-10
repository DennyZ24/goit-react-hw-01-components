import user from 'data/user';
import statisticalData from 'data/statistical-data';
import friends from 'data/friends';
import transactions from 'data/transactions';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendsList from 'components/FriendsList';
import TransactionHistory from 'components/TransactionHistory';

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

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
