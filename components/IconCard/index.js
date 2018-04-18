const IconCard = 
({1:[icon,numb],2:[icon,numb],3:[icon,numb],4:[icon,numb],5:[icon,numb]}) => {
 const rowinconccard = () =>{
 for (let i = 1; i < 6; i++){
  <div>
    <div>
      {i.icon}
    </div>
    <div>
      {i.numb}
    </div>
  </div>
  }
}
 return ( 
   <div>
    {rowinconccard(1,2,3,4,5)}
   <style jsx>{` 
   
   `}</style>
  </div>)
};
