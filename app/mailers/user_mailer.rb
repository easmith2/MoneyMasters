class UserMailer < ApplicationMailer

  def send_test(email)
    @email = email
    mail(to: email, subject: "Testing the emails")
  end

end
