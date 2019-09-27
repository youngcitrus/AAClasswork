class CommentsController < ApplicationController

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      comments = user.comments
    elsif params[:artwork_id]
      artwork = Artwork.find(params[:artwork_id])
      comments = artwork.comments
    end
    render json: comments
  end

  def create
    # render json: params
    comment = Comment.new(comment_params)
    if comment.save
      render json: user
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  # def show
  #   comment = User.find(params[:id])
  #   render json: comment
  # end

  def destroy
    comment = User.find(params[:id])
    comment.destroy
    render json: comment
  end

  # def update
  #   comment = Comment.find(params[:id])

  #   if comment.update(user_params)
  #     render json: comment
  #   else
  #     render json: comment.errors.full_messages, status: 500
  #   end
  # end

  private

  def comment_params
    params.require(:comment).permit(:artwork_id, :user_id, :body)
  end

end