"use client";

import React from 'react';
import Button from "@mui/material/Button";

const Home = () => {
  return (
<div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white to-white'>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold text-blue-600 border-b-4 border-blue-600 pb-2'>Selamat Datang di Dashboard</h1>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 p-4'>
        <Button 
          onClick={() => window.location.href = './todo'}
          type="submit"
          color="primary"
          size="large"
          variant="contained"
          className="hover:bg-blue-700"
        >
          Todo List
        </Button>
        <Button 
          // onClick={() => window.location.href = ''}
          type="submit"
          color="error"
          size="large"
          variant="contained"
          className="hover:bg-red-700"
        >
          Ke MengSun
        </Button>
        <Button 
          // onClick={() => window.location.href = ''}
          type="submit"
          color="error"
          size="large"
          variant="contained"
          className="hover:bg-red-700"
        >
          Ke MengSun
        </Button>
        <Button 
          // onClick={() => window.location.href = ''}
          type="submit"
          color="error"
          size="large"
          variant="contained"
          className="hover:bg-red-700"
        >
          Ke MengSun
        </Button>
        <Button 
          // onClick={() => window.location.href = ''}
          type="submit"
          color="error"
          size="large"
          variant="contained"
          className="hover:bg-red-700"
        >
          Ke MengSun
        </Button>
        <Button 
          // onClick={() => window.location.href = ''}
          type="submit"
          color="error"
          size="large"
          variant="contained"
          className="hover:bg-red-700"
        >
          Ke MengSun
        </Button>
        <Button 
          // onClick={() => window.location.href = ''}
          type="submit"
          color="error"
          size="large"
          variant="contained"
          className="hover:bg-red-700"
        >
          Ke MengSun
        </Button>
        <Button 
          // onClick={() => window.location.href = ''}
          type="submit"
          color="error"
          size="large"
          variant="contained"
          className="hover:bg-red-700"
        >
          Ke MengSun
        </Button>
      </div>
    </div>
  )
};

export default Home;
