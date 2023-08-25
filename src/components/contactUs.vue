<template>
  <div class="relative">
    <div class="bg-grid absolute inset-0"></div>
    <article class="container mx-auto py-10 lg:py-24">
      <div class="gap-8 lg:grid lg:grid-cols-2">
        <div>
          <h2>Get in Touch with Us</h2>
          <p>
            For any inquiries about our products or potential collaborations, feel free to reach out
            to us. Our team is always ready to address your concerns and provide the most
            professional advice. Let's work together to create more innovative NFC experiences!
          </p>
          <div class="my-3 p-3">
            <img src="../assets/image/touch.webp" alt="Cat caw" class="mx-auto" />
          </div>
        </div>

        <div class="relative flex flex-col justify-center overflow-hidden">
          <div
            class="bg-zinc-600/75 p-6 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-sm sm:rounded-xl"
          >
            <p class="text-primary">
              We value each of your messages and promise to respond with sincerity.
            </p>
            <form action="#">
              <div class="form-item">
                <input
                  required
                  autocomplete="name"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  class="form-item--input"
                />
                <label for="name" class="form-item--label">Your name</label>
              </div>
              <div class="form-item">
                <input
                  required
                  autocomplete="email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  class="form-item--input"
                />
                <label for="email" class="form-item--label">Email Address</label>
              </div>

              <div class="form-item">
                <select id="issue" name="issue" class="form-item--select" value="Issue">
                  <option value="Issue" disabled>Issue</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing and Payment</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <!-- 可以繼續添加其他選項 -->
                </select>
              </div>

              <div class="form-item">
                <textarea
                  required
                  name="question"
                  id="question"
                  class="form-item--input"
                  placeholder="Your Question"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>

              <div class="my-6">
                <button type="submit" class="btn btn-primary font-bold">Submit</button>
              </div>
            </form>
            <p>
              Your privacy and information security are our top priorities. We will securely store
              your information and ensure that it remains confidential. Thank you for your trust and
              support!
            </p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<style lang="postcss">
.bg-grid {
  background-image: url(../assets/image/grid.svg);
  mask-image: linear-gradient(180deg, #ffffff33, rgba(255, 255, 255, 0));
}

.input {
  @apply mt-1 w-full border-b-2 border-gray-300 bg-zinc-700 px-2 py-1 transition-colors placeholder:text-transparent focus:border-primary focus:bg-zinc-800 focus:outline-none;
}

.form-item {
  @apply relative mb-3 mt-6;

  & > .form-item--label {
    @apply pointer-events-none absolute -top-2 left-2 origin-left -translate-y-1/2 transform pl-0 text-sm text-primary transition-all duration-100 ease-in-out;
  }

  & > .form-item--input,
  & > .form-item--select {
    @apply mt-1 w-full rounded-none border-b-2 border-gray-300 bg-zinc-700 px-2 py-1 text-white transition-colors placeholder:text-transparent focus:border-primary focus:bg-zinc-800 focus:outline-none;
  }

  & > .form-item--input:placeholder-shown ~ .form-item--label {
    @apply top-1/2 text-base text-white/75;
  }
  & > .form-item--input:focus ~ .form-item--label {
    @apply -top-2 left-2 pl-0 text-sm text-white;
  }

  & > textarea.form-item--input::placeholder {
    @apply text-white;
  }
}
</style>
