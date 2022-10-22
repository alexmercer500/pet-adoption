import iconSet from '../../../Global/icon'

export default function User() {
  const userName = "Ratnesh Sahu"
  return (
    <div>
      <div className='user-info'>
        <img className='w-20' src={iconSet.userPic} alt='user-info' />
      </div>
      <div>
        <p>{userName}</p>
        <ul>
          <li>Profile</li>
          <li>Information</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  )
}
