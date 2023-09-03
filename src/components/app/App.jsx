import Profile from '../profile/Profile';
import Section from '../section/Section';
import Statistics from '../statistics/Statistics';
import FriendList from '../friend-list/FriendList';
import TransactionHistory from '../transaction-history/TransactionHistory';
import { user, data, friends, transactions } from '../../data/index';

const App = () => {
  return (
    <>
      <Section title='Task #1'>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title='Task #2'>
        <Statistics title='Upload Stats' stats={data} />
      </Section>
      <Section title='Task #3'>
        <FriendList friends={friends} />
      </Section>
      <Section title='Task #4'>
        <TransactionHistory transactions={transactions} />
      </Section>
    </>
  );
};
export default App;
