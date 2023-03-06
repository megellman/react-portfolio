import React from 'react';

function Contact() {
    return (
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="name" class="form-control" id="name" aria-describedby="name" />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" />
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <input type="message" class="form-control" id="message" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default Contact;