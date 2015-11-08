class Api::ToLearnsController < ApplicationController
  def index
    @to_learns = ToLearn.all

    render json: @to_learns
  end
end
