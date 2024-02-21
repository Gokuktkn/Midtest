import './App.css'
import { HeaderLeft } from './components/HeaderLeft'
import { UserInfo } from './components/UserInfo'
import { HeaderRight } from './components/HeaderRight'
import { FooterRight } from './components/FooterRight'
import { useState } from 'react'

const userData = [
  {
    id: 1,
    name: 'Aidi',
    avt: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/425842616_359397723620739_5627926461161303793_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=UyHpFlqfO9AAX--CTH9&_nc_ht=scontent.fdad3-6.fna&oh=00_AfBlrf-JDKf3oIMCW-XTQomwjVVQzeHrIoQSDBNWPmlSwQ&oe=65D7A673',
    message: [
      {
        textId: 1,
        userId: 1,
        text: 'Hilu'
      },
      {
        textId: 2,
        userId: 0,
        text: 'Helu. Hôm nay bạn cảm thấy như thế nào'
      },
      {
        textId: 3,
        userId: 1,
        text: 'Hôm nay mình rất vui!'
      }
    ]
  },
  {
    id: 2,
    name: 'Aang',
    avt: 'https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg',
    message: [
      {
        textId: 1,
        userId: 0,
        text: "Hi. What's your name"
      },
      {
        textId: 2,
        userId: 1,
        text: "My name's Aang"
      },
      {
        textId: 3,
        userId: 0,
        text: "Interesting name!"
      }
    ]
  },
  {
    id: 3,
    name: 'Beta',
    avt: 'https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg',
    message: [
      {
        textId: 1,
        userId: 1,
        text: 'Hey, wanna hang out?'
      },
      {
        textId: 2,
        userId: 0,
        text: 'Thanks, but I have to finish my homework!'
      },
      {
        textId: 3,
        userId: 1,
        text: 'Oh, I see.'
      },
      {
        textId: 4,
        userId: 1,
        text: 'See you next time!'
      }
    ]
  },
  {
    id: 4,
    name: 'Spiderman',
    avt: 'https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg',
    message: [
      {
        textId: 1,
        userId: 1,
        text: 'With great power comes great responsibility'
      },
      {
        textId: 2,
        userId: 0,
        text: 'It sound amazing'
      },
      {
        textId: 3,
        userId: 1,
        text: 'But not easy to do'
      }
    ]
  },
  {
    id: 5,
    name: 'LING',
    avt: 'https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg',
    message: [
      {
        textId: 1,
        userId: 1,
        text: 'How do you feel today?'
      },
      {
        textId: 2,
        userId: 0,
        text: "I'm good. How about you?"
      },
      {
        textId: 3,
        userId: 1,
        text: 'Me too, have a nice day!'
      }
    ]
  },
]


function App() {
  let currentChatting = 1;
  let [currentData, setCurrentData] = useState([]);

  const handleClick = () => {
    currentData = userData.filter(item => item.id === (currentChatting - 1))
    console.log(currentData);
  }
  return (
    <div className="container">
      <div className="content-left">
        <HeaderLeft />
        {userData.map((data) => {
          return <UserInfo item={data} key={data.id} onclick={handleClick} />
        })}
      </div>
      <div className="content-right">
        <HeaderRight />
        <div className='chatting-box'>
          <div className="friend-chat">
            <img src={userData[currentChatting - 1].avt} alt="user-avt" className='user-avt' />
            <div className="friend-mess mess">
              alo
            </div>
          </div>
          <div className="my-mess mess">
            alo alo
          </div>
        </div>
        <FooterRight />
      </div>
    </div>
  )
}

export default App
