class ToLearnsController < ApplicationController

  def index
    @to_learns = ToLearn.all
    @new_to_learn = ToLearn.new
    @total_count = @to_learns.count
    @completed_count = @to_learns.select { |to_learn| to_learn.completed }.count
    @uncompleted_count = @to_learns.select { |to_learn| !to_learn.completed }.count
  end

  def create
    @to_learn = ToLearn.new(to_learn_params)

    if @to_learn.save
      redirect_to :to_learns
    else
      @to_learns = ToLearn.all
      @new_to_learn = ToLearn.new(:name => params[:name])
      @completed_count = @to_learns.select { |to_learn| to_learn.completed }.count
      @uncompleted_count = @to_learns.select { |to_learn| !to_learn.completed }.count
      @errors = @to_learn.errors.full_messages
      render :index
    end
  end

  private
  
  def to_learn_params
    params.require(:to_learn).permit(:name, :completed)
  end
end
