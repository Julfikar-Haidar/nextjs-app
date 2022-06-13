import Link from "next/link"
import Meta from "../components/Meta"

export default function Home({itemList}) {

  return (
    <>
      <Meta title="Home page" description="Home description" keyword="java,php,python" />
      <div className='container'>
        <div className="row">

          {
            itemList.map((item) =>
              <div className="col-md-3" key={item.id}>
                <div className="card mb-2 dark">
                  <div className="card-body">
                    <h5 className="card-title">{item.title.substring(0,15)}</h5>
                    <p className="card-text">{item.body.substring(0,50)}</p>
                    <Link href="/post/[id]" as={`/post/${item.id}`}>
                    <a  className="card-link">Read more</a>
                    </Link>
                  
                  </div>
                </div>

              </div>
            )
          }

        </div>
      </div>

    </>
  )
}

export async function getServerSideProps() {

  let res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
  const itemList = await res.json()
  return {
    props: {
      itemList
    }, // will be passed to the page component as props
  }
}

