// Generate dates for the next 7 days


export const generateDates = () => {
    const days = [];
    const today = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
  
      const formattedDate =
        i === 0
          ? "Today"
          : i === 1
          ? "Tomorrow"
          : `${dayNames[date.getDay()]}, ${date.getDate()} ${date.toLocaleString(
              "default",
              { month: "short" }
            )}`;
  
      days.push({
        date: formattedDate,
        slots: Math.floor(Math.random() * 20) + 1, // Random slots between 1 and 20
      });
    }
    return days;
  };
  
  
   
  