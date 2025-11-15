import Button from './Button'

export default function RegistrationButtons() {
  return (
    <div className={'flex flex-col md:flex-row gap-x-7 gap-y-0 mt-1 md:mt-5'}>
      <a
        className={'hover:scale-110 duration-300 ease-in-out cursor-pointer mt-2'}
        href="https://bullsconnect.usf.edu/ieeecs/rsvp_boot?id=1985102"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button id="SignUpAsUSF" text="Sign Up as USF Student" />
      </a>

      <a
        className={'hover:scale-110 duration-300 ease-in-out cursor-pointer mt-2'}
        href="https://events.vtools.ieee.org/m/499182"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button id="SignUpAsNonUSF" text="Sign Up as Non-USF Student" />
      </a>

      <a
        className={'hover:scale-110 duration-300 ease-in-out cursor-pointer mt-2'}
        href="https://events.vtools.ieee.org/m/499182"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button id="SignUpAsGuest" text="Sign Up as Guest" />
      </a>
    </div>
  )
}
