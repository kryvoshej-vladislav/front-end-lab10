import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";

const addExpense = async (name, amount, date, setExpenses) => {
  try {
    const docRef = await addDoc(collection(db, "expenses"), {
      title: name,
      amount: amount,
      date: new Date(date),
    });
    console.log("Expense added with ID: ", docRef.id);

    const expenses = await getExpenses();
    setExpenses(expenses);
  } catch (error) {
    console.error("Error adding expense: ", error);
  }
};

const getExpenses = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "expenses"));
    const expenseData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      amount: doc.data().amount,
      date: doc.data().date.toDate(),
    }));

    expenseData.sort((a, b) => a.date - b.date);

    return expenseData;
  } catch (error) {
    console.error("Error getting expenses: ", error);
    return [];
  }
};

const updateExpense = async (id, newData, setExpenses) => {
  try {
    const expenseRef = doc(db, "expenses", id);
    await updateDoc(expenseRef, newData);
    console.log("Expense updated successfully");

    const updatedExpenses = await getExpenses();
    setExpenses(updatedExpenses);
  } catch (error) {
    console.error("Error updating expense: ", error);
  }
};

const deleteExpense = async (id, setExpenses) => {
  try {
    const expenseRef = doc(db, "expenses", id);
    await deleteDoc(expenseRef);
    console.log("Expense deleted successfully");

    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  } catch (error) {
    console.error("Error deleting expense: ", error);
  }
};

export { addExpense, getExpenses, updateExpense, deleteExpense };
