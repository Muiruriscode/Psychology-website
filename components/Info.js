
const Info = ({title, createdAt, content}) => {
  return ( 
  	<div className="flex">
  		<div className="w-1/12">
  		<p>1</p>
  		</div>
        <div className="w-11/12 flex justify-between">     
        <p >{content}</p>
        <p >{createdAt}</p>
        </div>
      </div>
  )
}

export default Info