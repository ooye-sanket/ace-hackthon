import React from 'react'
import Button from "@/components/ui-patterns/Button";
import Link from 'next/link';


const index = () => {
  return (
    <div>
        <h1 className="font-product-bungee text-5xl mt-6 flex flex-col items-center justify-between gap-4 max-sm:text-4xl">
              <span>{"Welcome to the"}</span>
              <span>{"CNCF Community."}</span>
            </h1>
            <Link href="/events" className=' flex justify-center mt-3' >
          <Button type="secondary">{"Join the Community"}</Button>
        </Link>

    </div>
  )
}

export default index