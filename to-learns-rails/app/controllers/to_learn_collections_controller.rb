class ToLearnCollectionsController < ApplicationController
  def update
    
    completed_to_learns = params[:completed_to_learns] || []
    uncompleted_to_learns = params[:all_to_learns] || []

    ToLearn.where(:id => completed_to_learns).update_all(:completed => true)

    uncompleted_to_learns = params[:all_to_learns] - completed_to_learns
    ToLearn.where(:id => uncompleted_to_learns).update_all(:completed => false)

    redirect_to to_learns_path
  end

  def destroy
    ToLearn.where(:completed => true).destroy_all
    redirect_to to_learns_path
  end
end
