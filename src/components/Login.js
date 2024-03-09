import React from 'react'

export default function Signup() {
  return (
    <>
      <div class="modal fade" id="Login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header" style={{ border: 'none' }}>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {/*model body writen inside the modal body box  */}
              <form>
                <h2>Log in</h2>
                <div class="mb-3">
                  <input type="email" class="form-control my-4" id="exampleInputEmail1" aria-describedby="ema ilHelp" placeholder='Enter your E-mail' style={{ height: '43px' }} />
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter your password' style={{ height: '43px' }} />
                </div>
                <button type="submit" class="btn btn-primary my-1 " style={{ width: '100%' }}>Submit</button>
              </form>
              <br />
              <h6>Or</h6>
              <div className='modal-footer'>
                <h6 className='w-100'>
                  <a href="/">Did't Have An Account</a>
                </h6>
              </div>
              {/* model body end  */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
