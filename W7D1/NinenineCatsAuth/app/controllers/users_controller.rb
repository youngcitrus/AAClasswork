class UsersController < ApplicationController 

  def new
    @user = User.new
    render :new

  end

  def create
    @user = User.new(user_params)
    if @user.save!
      redirect_to user_url(@user)
    end
  end

  def user_params
    self.params.require(:user).permit(:user_name, :password)
  end
end
