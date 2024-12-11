import './Form.css'

function Form() {
  return (
    <>
    <div class="form-container">
      <form class="application-form">
        <h2>Candidate Instructor Application</h2>
        <fieldset>
            <legend>Personal Information</legend>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="name">Name <span>*</span></label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number <span>*</span></label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
            </div>

            <div class="form-group-inline">
                <div class="form-group">
                    <label for="email">Email <span>*</span></label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                    <label for="dob">Date of Birth <span>*</span></label>
                    <input type="date" id="dob" name="dob" required />
                </div>
            </div>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="street">Street Address <span>*</span></label>
                    <input type="text" id="street" name="street" required />
                </div>
                <div class="form-group">
                    <label for="city">City <span>*</span></label>
                    <input type="text" id="city" name="city" required />
                </div>
            </div>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="province">Province <span>*</span></label>
                    <select id="province" name="province" required>
                        <option value="" disabled selected></option>
                        <option value="province1">Province 1</option>
                        <option value="province2">Province 2</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="postal-code">Postal Code <span>*</span></label>
                    <input type="text" id="postal-code" name="postal-code" required />
                </div>
            </div>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="pass">Password <span>*</span></label>
                    <input type="password" id="pass" name="pass" required />
                </div>
                <div class="form-group">
                    <label for="confirm_pass">Confirm Password <span>*</span></label>
                    <input type="password" id="confirm_pass" name="confirm_pass" required />
                </div>
            </div>
        </fieldset>
        <fieldset>
            <legend>Required Documents</legend>
            <div class="form-group">
                <label for="picture">Profile Picture <span>*</span> </label>
                <input type="file" id="picture" name="picture" />
            </div>
        </fieldset>
        <div class="form-group-terms">
            <input type="checkbox" id="terms" name="terms" required />
            <label for="terms">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestias aspernatur deleniti assumenda.
                Dolorem, vel natus architecto, alias in, omnis debitis ex totam vitae magni distinctio aliquam
                necessitatibus fuga molestias.
            </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Form
