module.exports = {
  remainingDays(job) {
    // calculo de tempo restante
    const remainingDaysInitial = (
      job["total-hours"] / job["daily-hours"]
    ).toFixed();

    const createdDate = new Date(job.created_at);
    const dueDay = createdDate.getDate() + Number(remainingDaysInitial);
    const dueDateInMs = createdDate.setDate(dueDay);

    const timeDiffInMs = dueDateInMs - Date.now();
    // transformar milli em dias
    const dayInMs = 1000 * 60 * 60 * 24;
    const dayDiff = Math.ceil(timeDiffInMs / dayInMs);

    return dayDiff;
  },

  calculateBudget: (job, valueHour) => valueHour * job["total-hours"],
};
