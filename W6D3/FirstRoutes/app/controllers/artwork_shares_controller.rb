class ArtworkSharesController < ApplicationController

  def destroy
    artworkshare = ArtworkShare.find(params[:id])
    artworkshare.destroy
    render json: artworkshare
  end

  def create
    artworkshare = ArtworkShare.new(artwork_share_params)
    if artworkshare.save
      render json: artworkshare   
    else
      render json: artworkshare.errors.full_messages, status: 422
    end
  end

  private

  def artwork_share_params
    params.require(:artwork_shares).permit(:artwork_id, :viewer_id)
  end
end