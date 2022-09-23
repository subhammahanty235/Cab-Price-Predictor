import React from 'react'
import { useNavigate } from 'react-router-dom'
import './notice.css'
function Notice() {
    const navigate = useNavigate()
    const accept = ()=>{
        localStorage.setItem('panel-notice-app' , "I accept the conditons")
        navigate('/')
        // <!-- Flexbox container for aligning the toasts -->
        //  return <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center" style={{minHeight: "200px"}}>
        
        //     {/* <!-- Then put toasts within --> */}
        //     <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        //       <div class="toast-header">
        //         <img src="" class="rounded me-2" alt="{4:Bootstrap}"/>
        //         <strong class="me-auto">message</strong>
        //         <small>Now</small>
        //         <button type="button" class="ms-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        //           <span aria-hidden="true">&times;</span>
        //         </button>
        //       </div>
        //       <div class="toast-body">
        //         Thanks for accepting
        //       </div>
        //     </div>
        //   </div>
        
        
        
        
    }
    return (
        <div>
            <h2 className='header text-center mt-5' >Notice</h2>
            <hr />
            <div className="container mc-notice">
                <ul className='listul '>
                    <li>Google Cloud Console or Google Map Api needs Billing for using their Services. But currenly i don't have any master card to complete the transaction. Please Cooperate as some major features are not working</li>
                    <li>Please Choose <span className='imptext'>Banglore as Pickup location</span>  and <span className="imptext">Hydrabad as Destination</span>. As i was not able to use API features i have statically defined these two locations to show website Features demo.</li>
                    <li>If you can help me or improve the app, Please contact me.</li>

                </ul>
                <button className='btn2' onClick={accept}>I Accept</button>
            </div>

        </div>
    )
}

export default Notice;