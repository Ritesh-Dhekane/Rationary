// DOM Elements
    const quickAddDropdown = document.getElementById('quickAdd');
    const addItemForm = document.getElementById('addItemForm');
    const itemNameInput = document.getElementById('itemName');
    const itemQuantityInput = document.getElementById('itemQuantity');
    const itemUnitInput = document.getElementById('itemUnit');
    const itemCategoryInput = document.getElementById('itemCategory');
    const itemPriceInput = document.getElementById('itemPrice');
    const addItemBtn = document.getElementById('addItemBtn');
    const saveListBtn = document.getElementById('saveListBtn');
    const shareListBtn = document.getElementById('shareListBtn');
    const groceryItemsList = document.getElementById('groceryItems');
    const totalCostElement = document.getElementById('totalCost');

    // Initial Prebuilt Items (Common Indian Groceries with realistic prices)
    const prebuiltItems = [
  {
    name: "Dry Coconut (\u0916\u094b\u092c\u0930\u093e \u092e\u094b\u091f\u093e / \u0917\u094b\u091f\u093e)",
    unit: "g",
    avgPrice: 280.0,
    category: "Others"
  },
  {
    name: "Chickpea Lentils (\u0915\u093e\u092c\u0941\u0932\u0940 \u0926\u093e\u0933 / \u0915\u093e\u092c\u0941\u0932\u0940)",
    unit: "g",
    avgPrice: 175.0,
    category: "Others"
  },
  {
    name: "Green Gram (Moong GM / \u0906\u0916\u094d\u0916\u093e)",
    unit: "g",
    avgPrice: 115.0,
    category: "Others"
  },
  {
    name: "Moth Beans (\u092e\u091f\u0915\u0940 \u0917\u093e\u0935\u0930\u093e\u0928)",
    unit: "g",
    avgPrice: 145.0,
    category: "Others"
  },
  {
    name: "Loose Poha (\u0915\u093e\u0902\u0926\u093e \u092a\u094b\u0939\u093e \u0932\u0941\u091c)",
    unit: "kg",
    avgPrice: 60.0,
    category: "Others"
  },
  {
    name: "Refined Oil (\u0938\u094d\u0927\u094d\u0926\u093f\u092e/\u0930\u093f\u0927\u094d\u0926\u092e \u0938\u094b\u092f\u093e)",
    unit: "L",
    avgPrice: 132.5,
    category: "Others"
  },
  {
    name: "Whole Masoor (\u092e\u0938\u0941\u0930 \u0906\u0916\u093e)",
    unit: "g",
    avgPrice: 24.0,
    category: "Others"
  },
  {
    name: "Clara White",
    unit: "g",
    avgPrice: 24.0,
    category: "Others"
  },
  {
    name: "Horse Gram (\u0939\u0941\u0932\u0917\u093e)",
    unit: "g",
    avgPrice: 28.0,
    category: "Others"
  },
  {
    name: "Desiccated Coconut (\u0916\u094b\u092c\u0930\u093e \u0915\u093f\u0938)",
    unit: "g",
    avgPrice: 70.0,
    category: "Others"
  },
  {
    name: "Farsan Shri Ganesh Misal",
    unit: "g",
    avgPrice: 80.0,
    category: "Others"
  },
  {
    name: "Nupur Mehendi / Nisha Black Mehendi",
    unit: "g",
    avgPrice: 12.0,
    category: "Others"
  },
  {
    name: "Society Tea 10 Rs Pack",
    unit: "pc",
    avgPrice: 9.9,
    category: "Others"
  },
  {
    name: "Suhana 5 Chicken Masala",
    unit: "pc",
    avgPrice: 4.9,
    category: "Others"
  },
  {
    name: "Suhana 5 Garam Masala",
    unit: "pc",
    avgPrice: 4.9,
    category: "Others"
  },
  {
    name: "Suhana 5 Sambar Masala",
    unit: "pc",
    avgPrice: 4.9,
    category: "Others"
  },
  {
    name: "Suhana Chole Masala 5",
    unit: "pc",
    avgPrice: 4.9,
    category: "Others"
  },
  {
    name: "Vatikka Hair Oil 1 Re pack",
    unit: "pc",
    avgPrice: 15.0,
    category: "Others"
  },
  {
    name: "Sunny Phenyl 200 ml",
    unit: "pc",
    avgPrice: 45.5,
    category: "Others"
  },
  {
    name: "Vim Liquid Pouch 150 ml",
    unit: "pc",
    avgPrice: 14.75,
    category: "Others"
  },
  {
    name: "Dhup Olla 200g",
    unit: "pc",
    avgPrice: 28.0,
    category: "Others"
  },
  {
    name: "Amul Milk 500 ml",
    unit: "pc",
    avgPrice: 29.0,
    category: "Others"
  },
  {
    name: "Suhana (unspecified)",
    unit: "pc",
    avgPrice: 5.0,
    category: "Others"
  },
  {
    name: "Suhana 5 Pav Bhaji Masala",
    unit: "pc",
    avgPrice: 4.9,
    category: "Others"
  },
  {
    name: "Wings Schezwan Chutney 10 Rs",
    unit: "pc",
    avgPrice: 9.75,
    category: "Others"
  },
  {
    name: "Sugar (\u0938\u093e\u0916\u0930)",
    unit: "kg",
    avgPrice: 42.0,
    category: "Others"
  },
  {
    name: "Daawat Nicki Rice 46 Rs/kg",
    unit: "kg",
    avgPrice: 46.0,
    category: "Others"
  },
  {
    name: "Clinic Plus Sachet 1 Re pack",
    unit: "pc",
    avgPrice: 15.0,
    category: "Others"
  },
  {
    name: "Parachute Coconut Oil 100 ml",
    unit: "pc",
    avgPrice: 46.5,
    category: "Others"
  },
  {
    name: "Murmura (Puffed Rice) 500g",
    unit: "pc",
    avgPrice: 45.0,
    category: "Others"
  },
  {
    name: "Farsan Tirga 500g",
    unit: "pc",
    avgPrice: 70.0,
    category: "Others"
  },
  {
    name: "Jaggery (\u0917\u0941\u0933) 450g",
    unit: "pc",
    avgPrice: 30.0,
    category: "Others"
  },
  {
    name: "Dry Ginger (\u0938\u0902\u0920) 20g",
    unit: "pc",
    avgPrice: 20.0,
    category: "Others"
  },
  {
    name: "Cardamom (\u0907\u0932\u093e\u092f\u091a\u0940) 10g",
    unit: "pc",
    avgPrice: 45.0,
    category: "Others"
  },
  {
    name: "Kissan Ketchup 500g Refill",
    unit: "pc",
    avgPrice: 48.5,
    category: "Others"
  },
  {
    name: "Ching's Soy Sauce 90g Pouch",
    unit: "pc",
    avgPrice: 24.0,
    category: "Others"
  },
  {
    name: "Ching's Red Chilli Sauce 90g Pouch",
    unit: "pc",
    avgPrice: 24.0,
    category: "Others"
  },
  {
    name: "Suhana 5 Mutton Masala",
    unit: "pc",
    avgPrice: 4.95,
    category: "Others"
  },
  {
    name: "Suhana 5 Biryani Masala",
    unit: "pc",
    avgPrice: 4.9,
    category: "Others"
  },
  {
    name: "Suhana Garam Masala 10 Rs",
    unit: "pc",
    avgPrice: 9.5,
    category: "Others"
  },
  {
    name: "Suhana Chole Masala 10 Rs",
    unit: "pc",
    avgPrice: 9.5,
    category: "Others"
  },
  {
    name: "Suhana Pav Bhaji 10 Rs",
    unit: "pc",
    avgPrice: 9.5,
    category: "Others"
  },
  {
    name: "Suhana Sambar Masala 10 Rs",
    unit: "pc",
    avgPrice: 9.5,
    category: "Others"
  },
  {
    name: "Peanuts (Spanish)",
    unit: "kg",
    avgPrice: 130.0,
    category: "Others"
  },
  {
    name: "Bajra (Millet) 38 Rs/kg",
    unit: "kg",
    avgPrice: 38.0,
    category: "Others"
  },
  {
    name: "Suhana Pani Puri 10 Rs",
    unit: "pc",
    avgPrice: 9.75,
    category: "Others"
  },
  {
    name: "Agarbatti 3-in-1 Big",
    unit: "pc",
    avgPrice: 53.0,
    category: "Others"
  },
  {
    name: "Soybean Wadi 250g",
    unit: "pc",
    avgPrice: 30.0,
    category: "Others"
  },
  {
    name: "Super Max 0 (unspecified)",
    unit: "pc",
    avgPrice: 49.0,
    category: "Others"
  },
  {
    name: "Hing (Asafoetida) 50g Navjeevan",
    unit: "pc",
    avgPrice: 68.0,
    category: "Others"
  },
  {
    name: "Britannia Bourbon 90g",
    unit: "pc",
    avgPrice: 9.79,
    category: "Others"
  },
  {
    name: "Jaggery (\u0917\u0941\u0933) 850g DEP",
    unit: "pc",
    avgPrice: 60.0,
    category: "Others"
  },
  {
    name: "Kanmal (unspecified)",
    unit: "pc",
    avgPrice: 55.0,
    category: "Others"
  },
  {
    name: "Green Peas 250g",
    unit: "pc",
    avgPrice: 24.0,
    category: "Others"
  },
  {
    name: "Tata Salt 1kg",
    unit: "pc",
    avgPrice: 29.0,
    category: "Others"
  },
  {
    name: "Chana Dal",
    unit: "kg",
    avgPrice: 77.0,
    category: "Others"
  },
  {
    name: "Moong Dal",
    unit: "kg",
    avgPrice: 105.0,
    category: "Others"
  },
  {
    name: "Lahar Furdal (unspecified dal)",
    unit: "kg",
    avgPrice: 114.5,
    category: "Others"
  },
  {
    name: "Kanidasuli Rice / Kanthashel Rice",
    unit: "kg",
    avgPrice: 42.5,
    category: "Others"
  },
  {
    name: "Biryani Rice",
    unit: "kg",
    avgPrice: 75.0,
    category: "Others"
  },
  {
    name: "Besan (Gram Flour)",
    unit: "kg",
    avgPrice: 73.25,
    category: "Others"
  },
  {
    name: "Rajdhani Poha",
    unit: "kg",
    avgPrice: 59.0,
    category: "Others"
  },
  {
    name: "Lijjat Moong Papad 200g",
    unit: "pc",
    avgPrice: 65.0,
    category: "Others"
  },
  {
    name: "Tata Salt 1kg (Fata Salt)",
    unit: "pc",
    avgPrice: 25.5,
    category: "Others"
  },
  {
    name: "Whisper Choice",
    unit: "pc",
    avgPrice: 45.75,
    category: "Others"
  },
  {
    name: "Ambari Mirchi 200g",
    unit: "pc",
    avgPrice: 67.0,
    category: "Others"
  },
  {
    name: "Cumin Seeds (Jeera) 100g",
    unit: "pc",
    avgPrice: 35.0,
    category: "Others"
  },
  {
    name: "Groundnut (L. Groundnut!)",
    unit: "kg",
    avgPrice: 129.0,
    category: "Others"
  },
  {
    name: "Sabudana (Tapioca Pearls)",
    unit: "kg",
    avgPrice: 50.5,
    category: "Others"
  },
  {
    name: "Madhuras Soak 200g",
    unit: "pc",
    avgPrice: 34.0,
    category: "Others"
  },
  {
    name: "In 1 P-216g (unspecified)",
    unit: "pc",
    avgPrice: 110.0,
    category: "Others"
  },
  {
    name: "Sambrani (unspecified)",
    unit: "pc",
    avgPrice: 9.0,
    category: "Others"
  },
  {
    name: "Mangaldeep Sambrani",
    unit: "pc",
    avgPrice: 10.0,
    category: "Others"
  },
  {
    name: "Supreme Shrad 900ml",
    unit: "pc",
    avgPrice: 115.0,
    category: "Others"
  },
  {
    name: "Maggi Noodles 420g",
    unit: "pc",
    avgPrice: 77.0,
    category: "Others"
  },
  {
    name: "Pravin Mango Pickle 200g",
    unit: "pc",
    avgPrice: 27.65,
    category: "Others"
  },
  {
    name: "Ship Matches 10pcs",
    unit: "pc",
    avgPrice: 9.0,
    category: "Others"
  },
  {
    name: "Parle G Glucose 800g",
    unit: "pc",
    avgPrice: 84.0,
    category: "Others"
  },
  {
    name: "Patanjali Regular Toothpaste 100g",
    unit: "pc",
    avgPrice: 49.0,
    category: "Others"
  },
  {
    name: "Santoor Supreme Soap",
    unit: "pc",
    avgPrice: 135.0,
    category: "Others"
  },
  {
    name: "Rin Advanced Detergent 110g",
    unit: "pc",
    avgPrice: 79.0,
    category: "Others"
  },
  {
    name: "Wheel Active Detergent Powder 1kg",
    unit: "pc",
    avgPrice: 9.3,
    category: "Others"
  },
  {
    name: "Tide Natural Lemon Detergent 800g",
    unit: "pc",
    avgPrice: 102.0,
    category: "Others"
  },
  {
    name: "Vim Dishwash Bar 120g",
    unit: "pc",
    avgPrice: 50.0,
    category: "Others"
  },
  {
    name: "Harpic Power 500ml",
    unit: "pc",
    avgPrice: 38.5,
    category: "Others"
  },
  {
    name: "Shall (unspecified)",
    unit: "pc",
    avgPrice: 12.0,
    category: "Others"
  },
  {
    name: "Urad Dal",
    unit: "kg",
    avgPrice: 115.0,
    category: "Others"
  },
  {
    name: "Coriander Powder (Dhaniya) 200g",
    unit: "pc",
    avgPrice: 52.0,
    category: "Others"
  },
  {
    name: "Bay Leaf (Tejpatta) 100g",
    unit: "pc",
    avgPrice: 132.0,
    category: "Others"
  },
  {
    name: "Shaahu Soybean",
    unit: "kg",
    avgPrice: 31.0,
    category: "Others"
  },
  {
    name: "Sugar (L SL Sugar)",
    unit: "kg",
    avgPrice: 86.0,
    category: "Others"
  },
  {
    name: "Shree Ram Soan 200g",
    unit: "pc",
    avgPrice: 46.0,
    category: "Others"
  },
  {
    name: "Maggi Masala Noodles 500g",
    unit: "pc",
    avgPrice: 20.0,
    category: "Others"
  },
  {
    name: "ZZT Dukes 4Fun 143g",
    unit: "pc",
    avgPrice: 9.3,
    category: "Others"
  },
  {
    name: "Britannia Jim Jam 57g",
    unit: "pc",
    avgPrice: 149.0,
    category: "Others"
  },
  {
    name: "Cadbury Dairy Milk 41.75g",
    unit: "pc",
    avgPrice: 9.3,
    category: "Others"
  },
  {
    name: "Santoor Sandal & Turmeric Soap",
    unit: "pc",
    avgPrice: 67.8,
    category: "Others"
  },
  {
    name: "Oral B Cavity Toothpaste",
    unit: "pc",
    avgPrice: 65.0,
    category: "Others"
  },
  {
    name: "Mirinda Orange 2 Litre",
    unit: "pc",
    avgPrice: 2.0,
    category: "Others"
  }
];

    // Load data from localStorage
    let groceryList = JSON.parse(localStorage.getItem('groceryList')) || [];
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || prebuiltItems;
    let priceHistory = JSON.parse(localStorage.getItem('priceHistory')) || {};

    // Initialize the app
    function init() {
      updateQuickAddDropdown();
      renderGroceryList();
      setupEventListeners();
    }

    // Update Quick Add Dropdown
    function updateQuickAddDropdown() {
      quickAddDropdown.innerHTML = '<option value="">Quick add common items...</option>';
      
      // Group by category
      const categories = [...new Set(savedItems.map(item => item.category))];
      
      categories.forEach(category => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category;
        
        savedItems
          .filter(item => item.category === category)
          .sort((a, b) => a.name.localeCompare(b.name))
          .forEach(item => {
            const option = document.createElement('option');
            option.value = item.name;
            option.textContent = `${item.name} (₹${item.avgPrice}/${item.unit})`;
            optgroup.appendChild(option);
          });
        
        quickAddDropdown.appendChild(optgroup);
      });
    }

    // Fill form from quick add selection
    function fillFromQuickAdd() {
      const selectedItemName = quickAddDropdown.value;
      if (!selectedItemName) return;
      
      const item = savedItems.find(i => i.name === selectedItemName);
      if (item) {
        itemNameInput.value = item.name;
        itemCategoryInput.value = item.category;
        itemUnitInput.value = item.unit;
        itemPriceInput.value = item.avgPrice;
        itemQuantityInput.value = item.unit === 'g' || item.unit === 'ml' ? '500' : '1';
        itemQuantityInput.focus();
      }
    }

    // Setup event listeners
    function setupEventListeners() {
      // Add item button
      addItemBtn.addEventListener('click', addItem);
      
      // Form submission
      addItemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addItem();
      });
      
      // Save list button
      saveListBtn.addEventListener('click', saveList);
      
      // Share list button
      shareListBtn.addEventListener('click', shareList);
    }

    // Add new item to the list
    function addItem() {
  const name = itemNameInput.value.trim();
  const quantity = parseFloat(itemQuantityInput.value) || 0;
  const unit = itemUnitInput.value;
  const unitPrice = parseFloat(itemPriceInput.value) || 0;

  if (name && quantity > 0) {
    const totalPrice = unitPrice * quantity;

    // Add to grocery list
    groceryList.push({
      id: Date.now(),
      name,
      quantity,
      unit,
      category: itemCategoryInput.value,
      price: totalPrice,
      bought: false
    });

    // Add to saved items if new
    if (!savedItems.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      savedItems.push({
        name,
        category: itemCategoryInput.value,
        unit,
        avgPrice: unitPrice
      });
      savedItems.sort((a, b) => a.name.localeCompare(b.name));
    }

    saveToLocalStorage();
    renderGroceryList();
    clearInputs();
    updateQuickAddDropdown();

    // Scroll to newly added item
    setTimeout(() => {
      groceryItemsList.lastElementChild.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } else {
    alert('Please enter a valid item name and quantity greater than 0');
    itemNameInput.focus();
  }
}

        
    //     // Scroll to the newly added item
    //     setTimeout(() => {
    //       groceryItemsList.lastElementChild.scrollIntoView({ behavior: 'smooth' });
    //     }, 100);
    //   } else {
    //     alert('Please enter an item name');
    //     itemNameInput.focus();
    //   }
    // }

    // Render the grocery list
    function renderGroceryList() {
      groceryItemsList.innerHTML = '';
      let totalCost = 0;

      if (groceryList.length === 0) {
        groceryItemsList.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-shopping-basket"></i>
            <h3>Your grocery list is empty</h3>
            <p>Add items using the form above</p>
          </div>
        `;
        totalCostElement.textContent = '0.00';
        return;
      }

      groceryList.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = `grocery-item ${item.bought ? 'bought' : ''}`;
        
        const unitDisplay = item.quantity ? `${item.quantity}${item.unit || ''}` : '';
        
        li.innerHTML = `
          <div class="item-info">
            <div class="item-name">${item.name}</div>
            <div class="item-details">
              ${unitDisplay ? `<span><i class="fas fa-weight-hanging"></i> ${unitDisplay}</span>` : ''}
              <span><i class="fas fa-tag"></i> ${item.category}</span>
              <span><i class="fas fa-rupee-sign"></i> ${item.price.toFixed(2)}</span>
            </div>
          </div>
          <div class="item-actions">
            <button onclick="toggleBought(${index})" title="${item.bought ? 'Mark as not bought' : 'Mark as bought'}">
              ${item.bought ? '<i class="fas fa-undo"></i>' : '<i class="fas fa-check"></i>'}
            </button>
            <button class="danger" onclick="deleteItem(${index})" title="Delete">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        `;
        groceryItemsList.appendChild(li);
        if (!item.bought) totalCost += item.price;
      });

      totalCostElement.textContent = totalCost.toFixed(2);
    }

    // Toggle bought status
    function toggleBought(index) {
      groceryList[index].bought = !groceryList[index].bought;
      
      // Update price history
      if (groceryList[index].bought) {
        const item = groceryList[index];
        if (!priceHistory[item.name]) priceHistory[item.name] = [];
        
        priceHistory[item.name].push({
          date: new Date().toLocaleDateString('en-IN'),
          price: item.price
        });

        // Update avg price in saved items
        const savedItem = savedItems.find(i => i.name === item.name);
        if (savedItem) {
          const allPrices = priceHistory[item.name].map(entry => entry.price);
          savedItem.avgPrice = Math.round(allPrices.reduce((a, b) => a + b, 0) / allPrices.length);
        }
      }
      
      saveToLocalStorage();
      renderGroceryList();
    }

    // Delete item
    function deleteItem(index) {
      if (confirm('Remove this item from your list?')) {
        groceryList.splice(index, 1);
        saveToLocalStorage();
        renderGroceryList();
      }
    }

    // Save list
    function saveList() {
      // Update saved items with any new entries
      groceryList.forEach(item => {
        if (!savedItems.some(saved => saved.name === item.name)) {
          savedItems.push({
            name: item.name,
            category: item.category,
            unit: item.unit,
            avgPrice: item.price
          });
        }
      });
      
      localStorage.setItem('savedItems', JSON.stringify(savedItems));
      showToast('List saved successfully!');
    }

    // Share list
    function shareList() {
      if (groceryList.length === 0) {
        showToast('Your list is empty!');
        return;
      }

      // Create a text version of the list
      let shareText = "🛒 My Grocery List:\n\n";
      let total = 0;
      
      // Group by category
      const categories = [...new Set(groceryList.map(item => item.category))];
      
      categories.forEach(category => {
        shareText += `=== ${category} ===\n`;
        
        groceryList
          .filter(item => item.category === category && !item.bought)
          .forEach(item => {
            const unit = item.unit ? `${item.quantity}${item.unit}` : item.quantity || '';
            shareText += `✔ ${item.name} ${unit ? `(${unit})` : ''} - ₹${item.price.toFixed(2)}\n`;
            total += item.price;
          });
        
        shareText += "\n";
      });
      
      shareText += `\nTotal: ₹${total.toFixed(2)}`;
      
      // Try to share using Web Share API
      if (navigator.share) {
        navigator.share({
          title: 'My Grocery List',
          text: shareText
        }).catch(err => {
          console.log('Error sharing:', err);
          copyToClipboard(shareText);
        });
      } else {
        // Fallback for browsers without Share API
        copyToClipboard(shareText);
      }
    }

    // Copy text to clipboard
    function copyToClipboard(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast('List copied to clipboard!');
    }

    // Show toast notification
    function showToast(message) {
      const toast = document.createElement('div');
      toast.style.position = 'fixed';
      toast.style.bottom = '20px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.backgroundColor = 'rgba(0,0,0,0.8)';
      toast.style.color = 'white';
      toast.style.padding = '12px 24px';
      toast.style.borderRadius = '4px';
      toast.style.zIndex = '1000';
      toast.style.animation = 'fadein 0.5s, fadeout 0.5s 2.5s';
      toast.textContent = message;
      
      document.body.appendChild(toast);
      
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 3000);
    }

    // Clear entire list
    function clearList() {
      if (confirm("Clear your entire grocery list?")) {
        groceryList = [];
        saveToLocalStorage();
        renderGroceryList();
        showToast('List cleared!');
      }
    }

    // Save data to localStorage
    function saveToLocalStorage() {
      localStorage.setItem('groceryList', JSON.stringify(groceryList));
      localStorage.setItem('priceHistory', JSON.stringify(priceHistory));
    }

    // Clear form inputs
    function clearInputs() {
      itemNameInput.value = '';
      itemQuantityInput.value = '';
      itemUnitInput.value = '';
      itemPriceInput.value = '';
      quickAddDropdown.value = '';
      itemNameInput.focus();
    }

    // Initialize the app
    init();
    