class BillsController < ApplicationController

  def index
    @bills = Bill.all
  end

  def create
    @bill = Bill.create(bill_params)
    render 'bill'
  end

  def destroy
    Bill.find(params[:id]).destroy
    head :ok
  end

  def sum_bills
    bills = Bill.all
    total = 0
    bills.each do |bill|
      total += bill.ammount
    end
    render json: total
  end

  private
    def bill_params
      params.require(:bill).permit(:name, :ammount)
    end
end
