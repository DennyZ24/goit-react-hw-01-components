import user from 'data/user';
import statisticalData from 'data/statistical-data';
import friends from 'data/friends';
import transactions from 'data/transactions';
import Container from 'components/Container/Container';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendsList from 'components/FriendsList/FriendsList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <Container>
      <Profile name={user.name} tag={user.tag} location={user.location} stats={user.stats} />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}
