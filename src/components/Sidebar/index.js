import React from 'react';
import { Button } from '../ui/button';
import { menuItems } from '../../utilities/constants';
import { Link } from 'gatsby';

const Sidebar = () => {
  return (
    <>

      <div className='flex flex-col justify-around h-[50vh] py-10'>
        {menuItems.map(item => (
          <Button variant='link' key={item.path} className='text-lg'>
            <Link to={item.path} variant='link'>{item.title}</Link>
          </Button>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
