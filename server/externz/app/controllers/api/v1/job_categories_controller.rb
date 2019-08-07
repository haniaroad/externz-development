module Api
  module V1
    class JobCategoriesController < ApplicationController
      def index
        @jobcategories = JobCategory.all
        render json: @jobcategories
      end
    end
  end
end

