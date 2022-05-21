import './styles/form.css'

const Form = () => {
    return ( 
        <div className="form">
            <form>                
                <label className='pt-4'>Restaurant Information</label>
                    <input type="text" placeholder="Restaurant Name"  className='inputstyle'/>
                    <input type="text" placeholder="Restaurant Complete Name"  className='inputstyle'/>
                <label>Contacts number @ Restaurant</label>
                    <input type="number" name="restaurantContact" id="" placeholder="+250  Mobile number"  className='inputstyle' />                                
                <label>Restaurant's Owner's Details</label>
                    <input type="number" name="ownerContact" id="" placeholder="+250  Mobile number"  className='inputstyle' />
                <div className="float flex">
                <input type="text" placeholder="Owner's Name" id="left" className='inputstyle' />
                <input type="email" name="email" id="right" placeholder="Restaurant's Owner's Email"  className='inputstyle' />
                </div>                
            </form>
        </div>
     );
}
 
export default Form;