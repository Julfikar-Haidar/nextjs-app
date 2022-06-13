import Link from "next/link"
import Meta from '../../components/Meta';

export default function SinglePost({ itemList }) {
  return (
    <>
      <Meta title={itemList.title} description={itemList.description} keyword={itemList.title}  />
      <div className='container'>
        <div className="row">

          <div className="col-md-12">
            <div className="card mb-2 ">
              <div className="card-body">
                <h5 className="card-title">{itemList.title}-({itemList.id})</h5>
                <p className="card-text">{itemList.body}</p>
                <Link href="/">
                    <a  className="card-link">Back to Home</a>
                    </Link>
              </div>
            </div>

          </div>


        </div>
      </div>
    </>

  )
}


export async function getServerSideProps(context) {
  console.log('11', context.params.id);
  let res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id)
  const itemList = await res.json()
  return {
    props: {
      itemList
    }, // will be passed to the page component as props
  }
}
