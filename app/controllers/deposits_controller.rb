class DepositsController < ApplicationController

  def index
    @deposits = Deposit.all
  end

  def create
    @deposits = Deposit.create(deposits_params)
    render 'deposit'
  end

  private

    def deposits_params
      params.require(:deposit).permit(:name, :amount)
    end
end
