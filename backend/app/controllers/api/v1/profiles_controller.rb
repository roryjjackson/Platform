class Api::V1::ProfilesController < ApplicationController
  before_action :set_profile, only: [:show, :update, :destroy]
  def index
    @profiles = Profile.all
    render json: @profiles, status: :ok
      # @profiles = current_user.profiles
  end

  def show
    render json: @profile, status: :ok
  end

  def create
    @profile = Profile.new(profile_params)
    # @profile = current_user.profile.new(company_params)
    @profile.user_id = current_user.id
    if @profile.save
      render json: @profile, status: :ok
    else
      render json: { data: @profile.errors.full_messages, status: "failed" },
      status: :unprocessable_entity
    end
  end

  def update
    if @profile.update(profile_params)
      render json: @profile, status: :ok
    else
      render json: { data: @profile.errors.full_messages, status: "failed" },
      status: :unprocessable_entity
    end
  end

  def destroy
    if @profile.destroy
      render json: { data: 'Profile deleted successfully', status: 'success'},
      status: :ok
    else
      render json: { data: 'something went wrong', status: 'failed'}
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:name, :helper)
  end

  def set_profile
    @profile = Profile.find(params[:id])
  rescue ActiveRecord::RecordNotFound => error
    render json: error.message, status: :unauthorized
  end
end
