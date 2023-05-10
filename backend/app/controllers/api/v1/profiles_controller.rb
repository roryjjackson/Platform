class Api::V1::ProfilesController < ApiController
  before_action :set_profile, only: [:show, :update, :destroy]
  def index
    @profiles = policy_scope(Profile)

    # @profiles = Profile.where(user_id: current_user.id)
    # @profiles = current_user.profiles
    render json: @profiles, status: :ok
  end

  def show
    render json: @profile, status: :ok
  end

  def new
    @profile = Profile.new
    authorize @profile
  end

  def create
    @profile = Profile.new(profile_params)
    # @profile = current_user.profile.new(company_params)
    puts "current user #{current_user}"
    @profile.user_id = current_user.id
    authorize @profile
    if @profile.save
      render json: @profile, status: :ok
    else
      render json: { data: @profile.errors.full_messages, status: "failed" },
      status: :unprocessable_entity
    end
  end

  def edit
    authorize @profile

  end

  def update
    authorize @profile

    if @profile.update(profile_params)
      render json: @profile, status: :ok
    else
      render json: { data: @profile.errors.full_messages, status: "failed" },
      status: :unprocessable_entity
    end
  end

  def destroy
    authorize @profile

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
